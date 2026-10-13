# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 13 Oct 2026 01:12:25 GMT with Node.js v26.11.1 (V8 v14.6.202.34-node.37) on runnervmmprz5 (Linux-x64 AMD EPYC 9V45 96-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `70`ns (233%)         | `80`ns (267%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `90`ns (300%)                  | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (333%)        | `100`ns (333%)                 | `10,000,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `160`ns (533%)        | `170`ns (567%)                 | `6,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `220`ns (733%)        | `230`ns (767%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `271`ns (903%)        | `271`ns (903%)                 | `3,690,037`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `281`ns (937%)        | `291`ns (970%)                 | `3,558,719`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `591`ns (1,970%)      | `601`ns (2,003%)               | `1,692,047`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,082`ns (3,607%)    | `1,092`ns (3,640%)             | `924,214`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `171`ns (100%)        | `181`ns (106%)                 | `5,847,953`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `651`ns (381%)        | `741`ns (433%)                 | `1,536,098`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `10,647`ns (6,226%)   | `10,767`ns (6,296%)            | `93,923`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `41`ns (102%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `71`ns (178%)         | `80`ns (200%)                  | `14,084,507`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `141`ns (353%)        | `160`ns (400%)                 | `7,092,199`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `290`ns (725%)        | `300`ns (750%)                 | `3,448,276`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,171`ns (2,928%)    | `1,182`ns (2,955%)             | `853,971`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `80`ns (267%)         | `80`ns (267%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (267%)         | `80`ns (267%)                  | `12,500,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `100`ns (333%)                 | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `281`ns (937%)        | `290`ns (967%)                 | `3,558,719`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `681`ns (2,270%)      | `691`ns (2,303%)               | `1,468,429`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,643`ns (5,477%)    | `1,662`ns (5,540%)             | `608,643`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `121`ns (100%)        | `130`ns (107%)                 | `8,264,463`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `140`ns (116%)        | `141`ns (117%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `180`ns (149%)        | `181`ns (150%)                 | `5,555,556`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `60`ns (150%)         | `60`ns (150%)                  | `16,666,667`/sec      |

<!-- endblock(results) -->
