# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 18 Oct 2024 20:06:47 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az566-51 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `190`ns (380%)        | `201`ns (402%)                 | `5,263,158`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (462%)        | `241`ns (482%)                 | `4,329,004`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `471`ns (942%)        | `481`ns (962%)                 | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `492`ns (984%)        | `501`ns (1,002%)               | `2,032,520`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `601`ns (1,202%)      | `621`ns (1,242%)               | `1,663,894`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,122`ns (2,244%)    | `1,152`ns (2,304%)             | `891,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,155`ns (4,310%)    | `2,185`ns (4,370%)             | `464,037`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,943`ns (69,886%)  | `35,103`ns (70,206%)           | `28,618`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `812`ns (100%)        | `902`ns (111%)                 | `1,231,527`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,679`ns (3,655%)   | `30,799`ns (3,793%)            | `33,694`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,159`ns (9,379%)   | `76,863`ns (9,466%)            | `13,130`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `161`ns (268%)        | `171`ns (285%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `230`ns (383%)        | `231`ns (385%)                 | `4,347,826`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (818%)        | `491`ns (818%)                 | `2,036,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,205`ns (3,675%)    | `2,225`ns (3,708%)             | `453,515`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,615`ns (29,358%)  | `17,695`ns (29,492%)           | `56,770`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (2,404%)    | `1,213`ns (2,426%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,077`ns (6,154%)    | `3,105`ns (6,210%)             | `324,992`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,175`ns (76,350%)  | `38,303`ns (76,606%)           | `26,195`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `241`ns (126%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `270`ns (141%)        | `271`ns (142%)                 | `3,703,704`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
