class FindIfPathExists {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        ArrayList<Integer>[] graph = new ArrayList[n];
        
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        
        for (int[] edge : edges) {
            graph[edge[0]].add(edge[1]);
            graph[edge[1]].add(edge[0]);
        }
        
        boolean[] visited = new boolean[n];
        return findPath(graph, visited, source, destination);
    }
    
    public boolean findPath(ArrayList<Integer>[] graph, boolean[] visited, int source, int destination) {
        if (source == destination) return true;
        
        visited[source] = true;
        for (int adj : graph[source]) {
            if (visited[adj] == false) {
                boolean partialPath = findPath(graph, visited, adj, destination);
                if (partialPath) return true;
            }
        }
        
        return false;
    }
}