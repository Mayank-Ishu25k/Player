// const audio = document.getElementById('audio');
// const playBtn = document.getElementById('play');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const progressBar = document.getElementById('progress-bar');
// const volumeSlider = document.getElementById('volume');
// const playlist = document.getElementById('playlist');

// // Array of songs (assuming mp3 files in misc folder)
// const songs = [
//     { title: 'Song 1', src: 'misc/solo.mp3'},
//     { title: 'Song 2', src: 'misc/study lofi.mp3'},
//     { title: 'Song 3', src: 'misc/Tanir & Tyoma.mp3'},
//     { title: 'Song 4', src: 'misc/The Chainsmokers - Closer (Lyric) ft Halsey.mp3'},
//     { title: 'Song 5', src: 'misc/The Weekend Reminder.mp3'},
//     { title: 'Song 6', src: 'misc/Trevor Daniel Falling.mp3'},
//     { title: 'Song 7', src: 'misc/Vilen - Ek Raat (Official Video).mp3'}
// ];

// let currentSongIndex = 0;

// // Load playlist
// function loadPlaylist() {
//     playlist.innerHTML = '';
//     songs.forEach((song, index) => {
//         const li = document.createElement('li');
//         li.textContent = song.title;
//         li.addEventListener('click', () => playSong(index));
//         playlist.appendChild(li);
//     });
// }

// // Play song
// function playSong(index) {
//     currentSongIndex = index;
//     audio.src = songs[index].src;
//     audio.play();
//     updateActiveSong();
// }

// // Update active song in playlist
// function updateActiveSong() {
//     const lis = playlist.querySelectorAll('li');
//     lis.forEach((li, index) => {
//         if (index === currentSongIndex) {
//             li.classList.add('active');
//         } else {
//             li.classList.remove('active');
//         }
//     });
// }

// // Play/Pause
// playBtn.addEventListener('click', () => {
//     if (audio.paused) {
//         audio.play();
//         playBtn.textContent = 'Pause';
//     } else {
//         audio.pause();
//         playBtn.textContent = 'Play';
//     }
// });

// // Next song
// nextBtn.addEventListener('click', () => {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     playSong(currentSongIndex);
// });

// // Previous song
// prevBtn.addEventListener('click', () => {
//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     playSong(currentSongIndex);
// });

// // Update progress bar
// audio.addEventListener('timeupdate', () => {
//     const progress = (audio.currentTime / audio.duration) * 100;
//     progressBar.style.width = progress + '%';
// });

// // Seek on progress bar click
// document.querySelector('.progress-container').addEventListener('click', (e) => {
//     const width = e.target.clientWidth;
//     const clickX = e.offsetX;
//     const duration = audio.duration;
//     audio.currentTime = (clickX / width) * duration;
// });

// // Volume control
// volumeSlider.addEventListener('input', () => {
//     audio.volume = volumeSlider.value;
// });

// // Auto play next song
// audio.addEventListener('ended', () => {
//     nextBtn.click();
// });

// // Initialize
// loadPlaylist();
// updateActiveSong();
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const volumeSlider = document.getElementById('volume');
const playlist = document.getElementById('playlist');
const currentTitle = document.getElementById('currentTitle');
const albumArt = document.getElementById('albumArt');

// Songs (you can add album arts)
const songs = [
    { title: 'Song 1', src: 'misc/solo.mp3', art: "https://i.scdn.co/image/ab67616d00001e02ea2f4f3e8a3c6d5327d85f1b" },
    { title: 'Song 2', src: 'misc/study lofi.mp3', art: "https://i.scdn.co/image/ab67616d00001e02c952a17b3b6d292743ffb391" },
    { title: 'Song 3', src: 'misc/Tanir & Tyoma.mp3', art: "https://i.scdn.co/image/ab67616d00001e02a180efdd8f2fa2a9898e39c7" },
    { title: 'Song 4', src: 'misc/The Chainsmokers - Closer (Lyric) ft Halsey.mp3', art: "https://i.scdn.co/image/ab67616d00001e029062a3f1e6b10833ad0396b1" },
    { title: 'Song 5', src: 'misc/The Weekend Reminder.mp3', art: "https://i.scdn.co/image/ab67616d00001e0228d9cfa6e5a25a0062ca298a" },
    { title: 'Song 6', src: 'misc/Trevor Daniel Falling.mp3', art: "https://i.scdn.co/image/ab67616d00001e02ffefe33dcebb6f6f489f5f75" },
    { title: 'Song 7', src: 'misc/Vilen - Ek Raat (Official Video).mp3', art: "https://i.scdn.co/image/ab67616d00001e027976eb64f3cabe133a5e5475" }
];

let currentSongIndex = 0;

// Load playlist
function loadPlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => playSong(index));
        playlist.appendChild(li);
    });
}

// Play song
function playSong(index) {
    currentSongIndex = index;
    audio.src = songs[index].src;
    audio.play();

    currentTitle.textContent = songs[index].title;
    albumArt.src = songs[index].art;

    updateActiveSong();
    playBtn.textContent = "⏸";
}

// Highlight active song
function updateActiveSong() {
    const lis = playlist.querySelectorAll('li');
    lis.forEach((li, index) => {
        li.classList.toggle('active', index === currentSongIndex);
    });
}

// Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

// Next song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// Previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});

// Seek
document.querySelector('.progress-container').addEventListener('click', (e) => {
    const width = e.target.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

// Volume
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// Auto play next
audio.addEventListener('ended', () => {
    nextBtn.click();
});

// Initialize
loadPlaylist();
updateActiveSong();
currentTitle.textContent = songs[0].title;
