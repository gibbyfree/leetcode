class FloodFill {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int oldColor = image[sr][sc];
        if (oldColor != newColor) {
            recur(image, sr, sc, oldColor, newColor);
        }
        return image;
    }
    
    public void recur(int[][] image, int sr, int sc, int oldColor, int newColor) {
        if (image[sr][sc] == oldColor) {
            image[sr][sc] = newColor; // fill this cell
            if (sr >= 1) {
                recur(image, sr - 1, sc, oldColor, newColor); // prev row
            }
            if (sc >= 1) {
                recur(image, sr, sc - 1, oldColor, newColor); // prev col
            }
            if (sr + 1 < image.length) {
                recur(image, sr + 1, sc, oldColor, newColor); // next row
            }
            if (sc + 1 < image[0].length) {
                recur(image, sr, sc + 1, oldColor, newColor); // next col
            }
        }
    }
}