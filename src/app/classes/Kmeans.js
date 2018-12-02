export class Kmeans {
    constructor() {
        this.matrix = [];
        this.clusters = [];
        this.centroids = [];
        this.labels = [];
        this.columnDataType = []
        this.alpha = 1;
        this.beta = 1;
        this.iterations = 0;
        this.maxIterations = Number.MAX_SAFE_INTEGER;

    }
    run(matrix, columnDataType, numClusters, alpha, beta, maxIterations) {
        this.init(matrix, columnDataType, numClusters, alpha, beta);
        let done = false;
        this.centroids=this.initializeCentroids(numClusters);
        while (!done) {
        	  this.formClusters();
            let new_centroids = this.findNewCentroids();
            if (this.isCentroidsEqual(this.centroids, new_centroids)) {
                done = true;
            } 
            this.centroids = new_centroids;
            this.iterations++;
        }
        console.log(`Clustering complete in ${this.iterations}`);
        console.log(`CLustering complete labels: ${this.labels}`);

    }
    init(matrix, columnDataType, numClusters, alpha, beta, maxIterations) {
        this.matrix = matrix;
        this.columnDataType = columnDataType;
        this.numClusters = numClusters;
        if (alpha && beta) {
            this.alpha = alpha;
            this.beta = beta;
        }
    }
    initializeCentroids() {
        let rdict = {}
        for (let i = 0; i < this.numClusters; i++) {
            let rint = getRandomInt(this.matrix.length);
            while (rdict[rint]) {
                rint = getRandomInt(this.matrix.length)
            }
            rdict[rint] = true;
        }
        let centroids = Object.keys(rdict).map(x => this.matrix[x]);

        centroids.forEach((centroid) => {
            for (let i = 0; i < centroid.length; i++) {
                    centroid[i] = this.matrix[getRandomInt(this.matrix.length)][i];                
            }
        });
        return centroids;
    }
    formClusters() {
        this.labels = [];
        for (let i = 0; i < this.matrix.length; i++) {
            let min = Number.MAX_SAFE_INTEGER;
            let label = 0;
            let obs = this.matrix[i];
            for (let j = 0; j < this.centroids.length; j++) {
                let centroid = this.centroids[j];
                let dist = this.calcDistance(obs, centroid);
                if (dist < min) {
                    min = dist;
                    label = j;
                }
            }
            this.labels.push(label);
        }
        let new_clusters = [];
        for (let i = 0; i < this.numClusters; i++) {
            let cluster = [];
            this.labels.forEach((label, j) => {
                if (i == label) {
                    cluster.push(j);
                }
            });
            new_clusters.push(cluster);
        }

        this.clusters = new_clusters;
    }
    findNewCentroids() {
        let new_centroids = [];
        this.clusters.forEach((cluster) => {
            new_centroids.push(this.findCentroid(cluster));
        });
        return new_centroids;
    }
    findCentroid(cluster) {
        let feature_aggregator = [];
        for (let i = 0; i < this.columnDataType.length; i++) {
            if (this.columnDataType[i] == 'INTERVAL') {
                feature_aggregator.push(0);
            }
            if (this.columnDataType[i] == 'NOMINAL') {
                feature_aggregator.push({});
            }
        }
        cluster.forEach((obsId) => {
            let obs = this.matrix[obsId];
            feature_aggregator = feature_aggregator.map((x, i) => {
                if (this.columnDataType[i] == 'INTERVAL') {
                    return x + obs[i]
                }
                if (this.columnDataType[i] == 'NOMINAL') {
                    if (x[obs[i]]) {
                        x[obs[i]]++;
                    } else {
                        x[obs[i]] = 1;
                    }
                    return x;
                }
            });
        });
        return feature_aggregator.map((x, i) => {
            if (this.columnDataType[i] == 'INTERVAL') {
                return x / cluster.length;
            }
            if (this.columnDataType[i] == 'NOMINAL') {
                let max = 0;
                let mode = '';
                for (let key in x) {
                    if (x[key] > max) {
                        max = x[key];
                        mode = key;
                    }
                }
                return mode;
            }
        });
    }
    calcDistance(a, b) {
        let edist = this.euclideanDistance(a, b);
        let jsim = this.jaccardSimilarity(a, b);
        let jdsim = 1 - jsim;

        return this.alpha * edist + this.beta * jdsim;
    }
    isCentroidsEqual(a, b) {
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a[0].length; j++) {
                if (this.columnDataType[j] == 'INTERVAL') {
                    let diff = Math.sqrt(Math.pow(a[i][j] - b[i][j], 2));
                    if (diff > 0.0001) {
                        return false;
                    }
                }
                if (this.columnDataType[j] == 'NOMINAL') {
                    if (a[i][j] != b[i][j]) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
    calcCohesionSSE() {

    }
    calcSeperationSSE() {

    }
    predict() {

    }
    euclideanDistance(a, b) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            if (this.columnDataType[i] == 'INTERVAL') {
                sum += Math.pow(a[i] - b[i], 2);
            }
        }
        return Math.sqrt(sum);
    }
    jaccardSimilarity(a, b) {
        let intersection = 0;
        let union = 0;
        for (let i = 0; i < a.length; i++) {
            if (this.columnDataType[i] == 'NOMINAL') {
                if (a[i] == b[i]) {
                    intersection++;
                }
                union++;
            }
        }
        return union != 0 ? (intersection / union) : 0;
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
