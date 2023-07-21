import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});


Assets.add("Clampy", "clampy.png")

window.addEventListener("resize", () => {
	const scaleX = window.innerWidth / app.screen.width
	const scaleY = window.innerHeight / app.screen.height

	const scale = Math.min(scaleX, scaleY)

	const screenWidth = Math.round(app.screen.width * scale)
	const screenHeight = Math.round(app.screen.height * scale)

	const marginHorizontal = Math.floor((window.innerWidth - screenWidth) / 2)
	const marginVertical = Math.floor((window.innerHeight - screenHeight) / 2)

	app.view.style!.width = `${screenWidth}px`
	app.view.style!.height = `${screenHeight}px`

	const view = app.view as HTMLCanvasElement

	view.style!.marginLeft= marginHorizontal + "px"
	view.style!.marginRight = marginHorizontal + "px"
	
	view.style.marginTop = marginVertical + "px"
	view.style.marginBottom = marginVertical + "px"
})

window.dispatchEvent(new Event("resize"))

Assets.load("Clampy").then(() => {
	const clampy: Sprite = Sprite.from("clampy.png");
	clampy.anchor.set(0.5);
	clampy.x = app.screen.width / 2;
	clampy.y = app.screen.height / 2;
	console.log(clampy.width, clampy.height)
	app.stage.addChild(clampy);
})








