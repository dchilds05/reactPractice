import SignUpNow from "./SignUpNow";

export default function Header () {
 return <header>
    <div class="container">
        <h1 class="logo">Relaxr</h1>
        <h2>Get piece of mind with a single tap</h2>
        <SignUpNow myClass = "button yellow" message = "Get it Now" />
    </div>
</header>

}