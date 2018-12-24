import {Kmeans} from './Kmeans.js';
 export class WebCluster {
    constructor() {
        this.dataSet = [];
        this.columnMaxValues = [];
        this.columnMinValues = [];
        this.columnWeight = [];
        this.columnDataType = [];
        this.columnNames = [];
        this.normalizedData = [];
        this.clusters = [];
        this.labels = [];
        this.kmeans = new Kmeans();
        this.dataHeaders=[];

    }
    setHeaders(headers){
        this.dataHeaders=headers;
    }

    hello(){
        console.log("World");
    	return "world";
    }
    setDataSet(dataSet) {
        this.dataSet = dataSet;
    }
    setColumnDataType(columnDataType) {
        this.columnDataType = columnDataType;
    }
    setColumnWeight(setColumnWeight) {
        this.setColumnWeight = setColumnWeight;
    }
    appendToDataSet(row) {
        this.dataSet.push(row);
    }
    runKmeans(numClusters, alpha, beta, maxIterations) {
    	console.log('Running Kmeans');
    		//normalize data
        this.kmeans.run(this.normalizedData, this.columnDataType, numClusters, alpha, beta, maxIterations);
        //this.labels = 
        //this.clusters = this.kmeans.clusters;
        
    }
    findColumnMaxs() {
        let output = [];
        for (let i = 0; i < this.dataSet[0].length; i++) {
            if (this.columnDataType[i] == 'INTERVAL') {
                let max = 0;

                for (let j = 0; j < this.dataSet.length; j++) {
                    let val = this.dataSet[j][i];
                    if (val > max) {
                        max = val
                    }
                }
                output.push(max);
            } else {
                output.push('NA');
            }

        }
        this.columnMaxValues = output;
    }
    findColumnMins() {
        let output = [];
        for (let i = 0; i < this.dataSet[0].length; i++) {
            if (this.columnDataType[i] == 'INTERVAL') {
                let min = Number.MAX_SAFE_INTEGER;

                for (let j = 0; j < this.dataSet.length; j++) {
                    let val = this.dataSet[j][i];

                    if (val < min) {
                        min = val
                    }
                }
                output.push(min);
            } else {
                output.push('NA');
            }

        }
        this.columnMinValues = output;
    }
    normalizeDataSet(dataSet, columnDataType) {
        let norm_dataSet = [];
        for (let k = 0; k < dataSet.length; k++) {
            norm_dataSet.push([]);
            for (let l = 0; l < dataSet[0].length; l++) {
                norm_dataSet[k].push(0);
            }
        }
        this.findColumnMins(dataSet, columnDataType);
        this.findColumnMaxs(dataSet, columnDataType);
        for (let i = 0; i < dataSet.length; i++) {

            for (let j = 0; j < dataSet[0].length; j++) {
                let x = dataSet[i][j];
                let min = this.columnMinValues[j];
                let max = this.columnMaxValues[j];
                if (max != 'NA') {
                    let norm = (x - min) / (max - min);
                    norm_dataSet[i][j] = norm;
                }

            }
        }
        this.normalizedData = norm_dataSet;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}
