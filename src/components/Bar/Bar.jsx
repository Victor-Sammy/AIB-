import "./style.scss";

export default function Bar({ value, total, color }) {
  return (
    <div className="bar">
      <div
        className="bar-stick"
        style={{
          width: `${(value / total) * 100}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}
