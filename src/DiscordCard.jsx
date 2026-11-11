import { useEffect, useState } from "react";
import { profile } from "./profile";

const statuses = {
  online: "Online",
  idle: "Idle",
  dnd: "Do not disturb",
  offline: "Offline / invisible",
};

export default function DiscordCard() {
  const [presence, setPresence] = useState(null);
  const [state, setState] = useState(profile.discordId ? "loading" : "setup");
  const [failedAvatar, setFailedAvatar] = useState(null);

  useEffect(() => {
    if (!profile.discordId) return;
    let disposed = false;
    let timer;
    let controller;
    let fetching = false;

    async function refresh() {
      if (document.hidden || fetching) return;
      fetching = true;
      controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      try {
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${profile.discordId}`,
          { signal: controller.signal, cache: "no-store" },
        );
        const payload = await response.json();
        if (
          !response.ok ||
          !payload.success ||
          payload.data?.discord_user?.id !== profile.discordId
        ) {
          throw new Error("Presence unavailable");
        }
        if (!disposed) {
          setPresence(payload.data);
          setState("ready");
        }
      } catch {
        if (!disposed) {
          setPresence(null);
          setState("unavailable");
        }
      } finally {
        fetching = false;
        clearTimeout(timeout);
      }
    }

    refresh();
    timer = setInterval(refresh, 30000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      disposed = true;
      clearInterval(timer);
      controller?.abort();
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  const user = presence?.discord_user;
  const avatar = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=160`
    : null;
  const status = statuses[presence?.discord_status]
    ? presence.discord_status
    : "unknown";
  const statusText =
    state === "ready"
      ? statuses[status] || "Status unavailable"
      : {
          loading: "Connecting…",
          setup: "Live presence coming soon",
          unavailable: "Presence unavailable",
        }[state];
  const customStatus = presence?.activities?.find(
    (activity) => activity.type === 4,
  );
  const activity = presence?.activities?.find((activity) =>
    [0, 1, 2, 3, 5].includes(activity.type),
  );
  const activityLabel =
    activity &&
    {
      0: "Playing",
      1: "Streaming",
      2: "Listening to",
      3: "Watching",
      5: "Competing in",
    }[activity.type];
  const spotify = presence?.listening_to_spotify && presence.spotify;

  return (
    <aside className="discord-card" aria-labelledby="discord-title">
      <div className="discord-card-top">
        <span>DISCORD / MY CURRENT ORBIT</span>
        <span aria-hidden="true">✳</span>
      </div>
      <div className="discord-identity">
        <div className="discord-avatar">
          {avatar && failedAvatar !== avatar ? (
            <img
              src={avatar}
              alt=""
              width="72"
              height="72"
              onError={() => setFailedAvatar(avatar)}
            />
          ) : (
            <span aria-hidden="true">CA</span>
          )}
          <span
            className={`presence-dot presence-${state === "ready" ? status : "unknown"}`}
            aria-hidden="true"
          />
        </div>
        <div className="discord-name">
          <h3 id="discord-title">{user?.global_name || "Cosmic Ashwin"}</h3>
          <span>@{profile.discordHandle}</span>
          <p className="discord-status" role="status">
            {statusText}
          </p>
        </div>
      </div>
      {customStatus?.state && (
        <p className="discord-custom">
          {customStatus.emoji?.name && !customStatus.emoji.id
            ? `${customStatus.emoji.name} `
            : ""}
          {customStatus.state}
        </p>
      )}
      <div className="discord-activity">
        {spotify ? (
          <>
            <span className="discord-activity-label">LISTENING ON SPOTIFY</span>
            <strong>{spotify.song}</strong>
            <p>{spotify.artist}</p>
          </>
        ) : activity ? (
          <>
            <span className="discord-activity-label">{activityLabel}</span>
            <strong>{activity.name}</strong>
            {activity.details && <p>{activity.details}</p>}
            {activity.state && <p>{activity.state}</p>}
          </>
        ) : (
          <p>
            {state === "ready"
              ? "No activity shared right now."
              : "Find me on Discord as cosmicashwin."}
          </p>
        )}
      </div>
      <div className="discord-card-bottom">
        <span>
          {state === "ready"
            ? "Presence updates every 30 seconds"
            : "Status will appear when connected"}
        </span>
        {profile.discordId && (
          <a href={`https://discord.com/users/${profile.discordId}`}>
            View profile <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </aside>
  );
}
