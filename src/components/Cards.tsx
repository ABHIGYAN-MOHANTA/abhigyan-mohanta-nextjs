import Image from "next/image";
export default function Cards(props: any) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl m-8">
      <figure>
        {(props.pic.startsWith("pic") && (
          <Image src={props.pic} alt="Cards" width={384} height={384} />
        )) || (
          <Image src={`${props.pic}`} alt="Cards" width={384} height={384} />
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
