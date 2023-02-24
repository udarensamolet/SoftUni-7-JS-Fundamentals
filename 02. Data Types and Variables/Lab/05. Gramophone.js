function gramophone(band, album, song) {
    let songDuration = album.length * band.length * song.length / 2;
    let rotationTimes = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotationTimes)} times.`);
}