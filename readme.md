# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 25 Sep 2024 04:13:18 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az693-378 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `150`ns (300%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `161`ns (322%)        | `171`ns (342%)                 | `6,211,180`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (500%)        | `261`ns (522%)                 | `4,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `451`ns (902%)        | `471`ns (942%)                 | `2,217,295`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `602`ns (1,204%)      | `631`ns (1,262%)               | `1,661,130`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,182`ns (2,364%)    | `1,232`ns (2,464%)             | `846,024`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,195`ns (4,390%)    | `2,235`ns (4,470%)             | `455,581`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `42,207`ns (84,414%)  | `42,399`ns (84,798%)           | `23,693`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `792`ns (100%)        | `872`ns (110%)                 | `1,262,626`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,895`ns (3,648%)   | `31,071`ns (3,923%)            | `34,608`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `91,071`ns (11,499%)  | `91,711`ns (11,580%)           | `10,980`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `69`ns (115%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (235%)        | `150`ns (250%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `220`ns (367%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `481`ns (802%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,175`ns (3,625%)    | `2,205`ns (3,675%)             | `459,770`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,391`ns (35,652%)  | `21,471`ns (35,785%)           | `46,749`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `150`ns (300%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (1,062%)      | `561`ns (1,122%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,213`ns (2,426%)    | `1,233`ns (2,466%)             | `824,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,065`ns (6,130%)    | `3,097`ns (6,194%)             | `326,264`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,791`ns (91,582%)  | `46,047`ns (92,094%)           | `21,838`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (120%)        | `231`ns (121%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (137%)        | `271`ns (142%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
