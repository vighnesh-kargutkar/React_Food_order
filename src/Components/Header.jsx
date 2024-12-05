import image from "../assets/logo.jpg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={image} alt="" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly> Cart (0)</Button>
      </nav>
    </header>
  );
}
