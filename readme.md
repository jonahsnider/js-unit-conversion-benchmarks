# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Aug 2024 12:10:40 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az885-952 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `60`ns (120%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `240`ns (480%)        | `250`ns (500%)                 | `4,166,667`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `431`ns (862%)        | `441`ns (882%)                 | `2,320,186`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `591`ns (1,182%)      | `611`ns (1,222%)               | `1,692,047`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,112`ns (2,224%)    | `1,132`ns (2,264%)             | `899,281`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,125`ns (4,250%)    | `2,155`ns (4,310%)             | `470,588`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,847`ns (69,694%)  | `34,975`ns (69,950%)           | `28,697`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `742`ns (100%)        | `792`ns (107%)                 | `1,347,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,383`ns (3,825%)   | `29,279`ns (3,946%)            | `35,232`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,903`ns (10,230%)  | `76,351`ns (10,290%)           | `13,175`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (235%)        | `151`ns (252%)                 | `7,092,199`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `151`ns (252%)        | `160`ns (267%)                 | `6,622,517`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (368%)        | `240`ns (400%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (3,592%)    | `2,175`ns (3,625%)             | `464,037`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,647`ns (29,412%)  | `17,695`ns (29,492%)           | `56,667`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (320%)        | `170`ns (340%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (1,082%)      | `561`ns (1,122%)               | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (2,404%)    | `1,212`ns (2,424%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,967`ns (5,934%)    | `2,997`ns (5,994%)             | `337,041`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,143`ns (76,286%)  | `38,271`ns (76,542%)           | `26,217`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `181`ns (100%)        | `191`ns (106%)                 | `5,524,862`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (128%)        | `240`ns (133%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (155%)        | `281`ns (155%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `70`ns (140%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `170`ns (340%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
