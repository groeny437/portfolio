export default function SectionTitle({
  title,
  style,
}: {
  title: string;
  style?: string;
}) {
  return (
    <div className={`mb-ml ${style}`}>
      <i className="inline-block w-2 h-2 mr-xs bg-black align-middle"></i>
      <span className="point-t2 uppercase text-gray-500">{title}</span>
    </div>
  );
}
