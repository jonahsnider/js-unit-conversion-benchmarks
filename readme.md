# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 02 Aug 2024 14:03:26 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az2031-175 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `80`ns (133%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `171`ns (285%)        | `341`ns (568%)                 | `5,847,953`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `231`ns (385%)        | `381`ns (635%)                 | `4,329,004`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `350`ns (583%)        | `611`ns (1,018%)               | `2,857,143`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `521`ns (868%)        | `1,112`ns (1,853%)             | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `722`ns (1,203%)      | `1,483`ns (2,472%)             | `1,385,042`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `731`ns (1,218%)      | `1,492`ns (2,487%)             | `1,367,989`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,522`ns (2,537%)    | `2,815`ns (4,692%)             | `657,030`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,475`ns (4,125%)    | `4,911`ns (8,185%)             | `404,040`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `35,583`ns (59,305%)  | `64,479`ns (107,465%)          | `28,103`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `1,292`ns (155%)               | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,583`ns (3,556%)   | `52,735`ns (6,338%)            | `33,803`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,351`ns (9,177%)   | `139,391`ns (16,754%)          | `13,097`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `90`ns (100%)         | `91`ns (101%)                  | `11,111,111`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `261`ns (290%)        | `290`ns (322%)                 | `3,831,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `321`ns (357%)        | `361`ns (401%)                 | `3,115,265`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (546%)        | `551`ns (612%)                 | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (1,336%)    | `1,322`ns (1,469%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,279`ns (4,754%)    | `4,499`ns (4,999%)             | `233,699`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `32,383`ns (35,981%)  | `32,863`ns (36,514%)           | `30,880`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (416%)        | `371`ns (530%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `361`ns (516%)        | `421`ns (601%)                 | `2,770,083`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,252`ns (1,789%)    | `1,453`ns (2,076%)             | `798,722`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,683`ns (2,404%)    | `2,115`ns (3,021%)             | `594,177`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,083`ns (8,690%)    | `7,095`ns (10,136%)            | `164,393`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,463`ns (100,661%) | `71,359`ns (101,941%)          | `14,192`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `361`ns (100%)        | `401`ns (111%)                 | `2,770,083`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `430`ns (119%)        | `471`ns (130%)                 | `2,325,581`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `491`ns (136%)        | `551`ns (153%)                 | `2,036,660`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `181`ns (259%)        | `200`ns (286%)                 | `5,524,862`/sec       |

<!-- endblock(results) -->
