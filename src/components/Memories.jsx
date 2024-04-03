import Memory from "./Memory";
const tempData = [
  {
    id: 0,
    topic: "When I was in the jungle in Rome",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa facilis suscipit quaerat animi quibusdam repellat numquam ducimus nihil laudantium quod?",
    author: "Kaan",
    imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/55.jpg",
    verifiedUser: true,
  },
  {
    id: 1,
    topic: "Subways in Istanbul.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur itaque rem dolorem vero molestiae officia quos aperiam adipisci! Doloribus voluptatum eius quam atque. Velit doloremque rerum, maxime ea nisi unde.",
    author: "Ahmet",
    imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/33.jpg",
    verifiedUser: true,
  },
  {
    id: 2,
    topic: "Cats in Istanbul.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, rem quia, excepturi consequatur vitae temporibus praesentium eveniet cumque eaque eos itaque quo dicta, eum fugit earum sint. Velit cupiditate, hic quos commodi officia omnis nostrum expedita doloremque ipsam perferendis asperiores, placeat aperiam non nulla voluptatum atque deserunt at nemo totam assumenda? Voluptatibus ab laboriosam commodi nam. Voluptatibus explicabo adipisci reprehenderit provident quod sequi distinctio aliquam asperiores qui. Molestias eum vero nihil cupiditate voluptates architecto consequatur, dolorem doloribus placeat, aperiam saepe perferendis fugiat quae quasi, modi blanditiis? Alias sed ducimus est labore mollitia obcaecati sint veritatis officia, velit, deserunt fuga iure.",
    author: "Ali",
    imgUrl: "https://xsgames.co/randomusers/assets/avatars/male/30.jpg",
    verifiedUser: false,
  },
  {
    id: 3,
    topic: "Food in Chine.",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam distinctio nobis error sequi cum cumque perferendis, corrupti itaque qui magni?",
    author: "Ayse",
    imgUrl: "https://xsgames.co/randomusers/assets/avatars/female/30.jpg",
    verifiedUser: false,
  },
];
function Memories() {
  return (
    <ul className="flex flex-col gap-4">
      {tempData.map((memory) => (
        <Memory key={memory.id} memoryObj={memory} />
      ))}
    </ul>
  );
}

export default Memories;
