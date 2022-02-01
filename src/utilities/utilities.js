export function getRandomNumber(min, max) {
    // Returns a random number between min and max (both included)
    return Math.random() * (max - min + 1) + min
}