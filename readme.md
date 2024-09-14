# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 14 Sep 2024 15:37:28 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az840-814 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `180`ns (360%)        | `191`ns (382%)                 | `5,555,556`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (442%)        | `241`ns (482%)                 | `4,524,887`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `451`ns (902%)        | `471`ns (942%)                 | `2,217,295`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `511`ns (1,022%)      | `521`ns (1,042%)               | `1,956,947`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `632`ns (1,264%)      | `652`ns (1,304%)               | `1,582,278`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,202`ns (2,404%)    | `1,253`ns (2,506%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,165`ns (4,330%)    | `2,205`ns (4,410%)             | `461,894`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,759`ns (83,518%)  | `42,015`ns (84,030%)           | `23,947`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `771`ns (110%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,879`ns (4,120%)   | `29,967`ns (4,275%)            | `34,627`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `91,903`ns (13,110%)  | `92,479`ns (13,192%)           | `10,881`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (171%)        | `130`ns (186%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (214%)        | `151`ns (216%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (330%)        | `241`ns (344%)                 | `4,329,004`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `490`ns (700%)        | `491`ns (701%)                 | `2,040,816`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,195`ns (3,136%)    | `2,215`ns (3,164%)             | `455,581`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,279`ns (30,399%)  | `21,359`ns (30,513%)           | `46,995`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (1,142%)      | `631`ns (1,262%)               | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,213`ns (2,426%)    | `1,242`ns (2,484%)             | `824,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,017`ns (6,034%)    | `3,047`ns (6,094%)             | `331,455`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,663`ns (91,326%)  | `45,919`ns (91,838%)           | `21,900`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (121%)        | `240`ns (126%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `261`ns (137%)        | `271`ns (142%)                 | `3,831,418`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
