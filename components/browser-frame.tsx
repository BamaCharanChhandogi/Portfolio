import Image from "next/image";

type BrowserFrameProps = {
  image: string;
  url: string;
  priority?: boolean;
};

export function BrowserFrame({ image, url, priority }: BrowserFrameProps) {
  return (
    <div className="browser-frame article-browser">
      <div className="browser-top">
        <span />
        <span />
        <span />
        <p>{url}</p>
      </div>
      <div className="browser-image">
        <Image src={image} alt="" fill sizes="(max-width: 980px) 100vw, 760px" priority={priority} />
      </div>
    </div>
  );
}
