export default function ProfileCard(propObj) {
  return (
    <div className="card">
      <div class="card-image">
        <figure class="image is1by1">
          <img src={propObj.image} alt="Logo" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">{propObj.aiName}</p>{" "}
          <p class="subtitle is-6">{propObj.twitterHandle}</p>
        </div>
        <div className="content">{propObj.desc}</div>
      </div>
    </div>
  );
}
