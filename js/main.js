const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const songs = [
	{
		name: "1",
		title: "Pretty Girl",
		artist: "Singer: Maggie Lindemann",
	},
	{
		name: "2",
		title: "Until You",
		artist: "Singer: Shayne Ward",
	},
	{
		name: "3",
		title: "Perfect",
		artist: "Singer: Ed Sheeran",
	},
	{
		name: "4",
		title: "Unstoppable",
		artist: "Singer: Sia",
	},
	{
		name: "5",
		title: "Don't Watch Me Cry",
		artist: "Singer: Jorja Smith",
	},
	{
		name: "6",
		title: "Night Changes",
		artist: "Singer: One Direction",
	},
	{
		name: "7",
		title: "Like You ...",
		artist: "Singer: Ysabelle Ceuvas",
	},
	{
		name: "8",
		title: "Body Back",
		artist: "Singer: Gryffin",
	},
	{
		name: "9",
		title: "Let Her Go",
		artist: "Singer: Passenger",
	},
	{
		name: "10",
		title: "You Are The ...",
		artist: "Singer: Alexandra Porat",
	}
];


let isPlaying = false;

// for play function
const playMusic = () => {
	isPlaying = true;
	music.play();
	play.classList.replace("fa-play", "fa-pause");
	img.classList.add("anime");
};


// for pause function
const pauseMusic = () => {
	isPlaying = false;
	music.pause();
	play.classList.replace("fa-pause", "fa-play");
	img.classList.remove("anime");
};


play.addEventListener("click", () => {
	isPlaying ? pauseMusic() : playMusic();
});


// changing the music data
const loadSong = (songs) => {
	title.textContent = songs.title;
	artist.textContent = songs.artist;
	music.src = "music/" + songs.name + ".mp3";
	img.src = "images/" + songs.name + ".jpg";
};


songIndex = 0;
const nextSong = () =>{
	songIndex = (songIndex + 1) % songs.length;
	localStorage.setItem("songIndex", songIndex);

	loadSong(songs[songIndex]);
	playMusic();
};


const prevSong = () =>{
	songIndex = (songIndex - 1 + songs.length) % songs.length;

	loadSong(songs[songIndex]);
	playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);


function storeIndex () {
	if (JSON.parse(localStorage.getItem("songIndex")) !== null ) {
        songIndex = JSON.parse(localStorage.getItem("songIndex"));
	}
}

storeIndex ();
loadSong(songs[songIndex]);	





