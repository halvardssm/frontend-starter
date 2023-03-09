import { FC } from "react";
import twemoji from "twemoji";

export interface EmojiProps {
  label?: string;
  symbol: string;
  className?: string;
}

export const Emoji: FC<EmojiProps> = (props) => (
  <span
    className={`emoji ${props.className}`}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    <span
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(props.symbol, {
          folder: "svg",
          ext: ".svg",
        }),
      }}
    />
  </span>
);
