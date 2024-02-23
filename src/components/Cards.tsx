import Image from "next/image";
export default function Cards(props: any) {
  return (
    <div
      className="card bg-base-100 shadow-xl m-8"
      style={{ maxWidth: "768px" }}
    >
      <figure>
        {(props.pic.startsWith("pic") && (
          <Image src={props.pic} alt="Cards" width={768} height={768} />
        )) || (
          <Image src={`${props.pic}`} alt="Cards" width={768} height={768} />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          <div className="badge badge-secondary">{props.badge}</div>
        </h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{props.tag1}</div>
          <div className="badge badge-outline">{props.tag2}</div>
        </div>
      </div>
    </div>
  );
}
