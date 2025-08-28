# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 28 Aug 2025 17:48:11 GMT with Node.js v22.18.0 (V8 v12.4.254.21-node.27) on pkrvmccyg1gnepe (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `280`ns (560%)        | `290`ns (580%)                 | `3,571,429`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `421`ns (842%)        | `431`ns (862%)                 | `2,375,297`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (942%)        | `481`ns (962%)                 | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `571`ns (1,142%)      | `591`ns (1,182%)               | `1,751,313`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,104%)    | `1,092`ns (2,184%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,055`ns (4,110%)    | `2,093`ns (4,186%)             | `486,618`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `631`ns (100%)        | `742`ns (118%)                 | `1,584,786`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,603`ns (254%)      | `1,793`ns (284%)               | `623,830`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,743`ns (4,080%)   | `27,855`ns (4,414%)            | `38,846`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (235%)        | `150`ns (250%)                 | `7,092,199`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (250%)        | `160`ns (267%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `260`ns (433%)        | `261`ns (435%)                 | `3,846,154`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (785%)        | `481`ns (802%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,125`ns (3,542%)    | `2,155`ns (3,592%)             | `470,588`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (300%)        | `150`ns (300%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `550`ns (1,100%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,102`ns (2,204%)    | `1,112`ns (2,224%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,907`ns (5,814%)    | `2,947`ns (5,894%)             | `343,997`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `211`ns (100%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (114%)        | `250`ns (119%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (134%)        | `291`ns (139%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
