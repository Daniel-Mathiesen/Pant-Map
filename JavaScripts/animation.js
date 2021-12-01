// needs fix
// When you toggle it on the class is added and also saved when you leave the page, but the animation class does not play the animation

let AnimationStyle = localStorage.getItem('AnimationPlay')
const AnimationToggle = document.querySelector("#ChangeAnimation");
// Forced to toggle on cause broken lol
document.getElementById("Checkbox2").checked = true
// Is animation on?

const enableAnimation = () => {
    // Add animation class to body
    document.getElementById("animationDiv").classList.add("animation")
    // update animation in localStorage
    localStorage.setItem("AnimationPlay", "enabled")
};

const disableAnimation = () => {
    // Add animation class to body
    document.getElementById("animationDiv").classList.remove("animation")
    // update animation in localStorage
    localStorage.setItem("AnimationPlay", null)
};

if (AnimationStyle === "enabled"){
    enableAnimation();
    document.getElementById("Checkbox2").checked = true
}

AnimationToggle.addEventListener("click", () => {
    AnimationStyle = localStorage.getItem("AnimationPlay");
    if (AnimationStyle !== "enabled") {
        enableAnimation();
    } else {
        disableAnimation();
    }
});