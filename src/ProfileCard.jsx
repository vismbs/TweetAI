export default function ProfileCard(propObj) {
  return (
    <div>
      <img src={propObj.image} alt="Logo" />
      {propObj.aiName} {propObj.twitterHandle}
    </div>
  );
}
