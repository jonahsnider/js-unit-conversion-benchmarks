# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 21 Jun 2024 05:18:36 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az732-226 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (251%)        | `421`ns (301%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (365%)        | `571`ns (408%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (415%)        | `681`ns (486%)                 | `1,721,170`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,142`ns (816%)      | `1,243`ns (888%)               | `875,657`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,402`ns (1,001%)    | `1,714`ns (1,224%)             | `713,267`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,432`ns (1,023%)    | `1,703`ns (1,216%)             | `698,324`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,685`ns (1,918%)    | `2,987`ns (2,134%)             | `372,439`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,659`ns (3,328%)    | `5,383`ns (3,845%)             | `214,638`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,087`ns (52,205%)  | `74,367`ns (53,119%)           | `13,682`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `892`ns (100%)        | `1,093`ns (123%)               | `1,121,076`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,551`ns (3,986%)   | `51,807`ns (5,808%)            | `28,129`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,991`ns (9,528%)   | `156,415`ns (17,535%)          | `11,766`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `161`ns (107%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (221%)        | `380`ns (253%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `391`ns (261%)        | `441`ns (294%)                 | `2,557,545`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (341%)        | `571`ns (381%)                 | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,222`ns (815%)      | `1,362`ns (908%)               | `818,331`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,459`ns (2,973%)    | `4,779`ns (3,186%)             | `224,266`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,119`ns (24,746%)  | `38,015`ns (25,343%)           | `26,940`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `141`ns (118%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (268%)        | `370`ns (308%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `390`ns (325%)        | `461`ns (384%)                 | `2,564,103`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,333`ns (1,111%)    | `1,473`ns (1,228%)             | `750,188`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,644`ns (1,370%)    | `1,883`ns (1,569%)             | `608,273`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,295`ns (5,246%)    | `6,823`ns (5,686%)             | `158,856`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,127`ns (66,773%)  | `81,151`ns (67,626%)           | `12,480`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `512`ns (106%)        | `571`ns (119%)                 | `1,953,125`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `621`ns (129%)        | `692`ns (144%)                 | `1,610,306`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `241`ns (109%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (249%)        | `611`ns (276%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
