# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 03 Oct 2026 00:16:31 GMT with Node.js v26.10.0 (V8 v14.6.202.34-node.34) on runnervm8df0l (Linux-x64 AMD EPYC 9V45 96-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `100`ns (333%)                 | `11,111,111`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (333%)        | `101`ns (337%)                 | `10,000,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `160`ns (533%)        | `161`ns (537%)                 | `6,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `220`ns (733%)        | `230`ns (767%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `280`ns (933%)        | `281`ns (937%)                 | `3,571,429`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `281`ns (937%)        | `291`ns (970%)                 | `3,558,719`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `611`ns (2,037%)      | `621`ns (2,070%)               | `1,636,661`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,042`ns (3,473%)    | `1,052`ns (3,507%)             | `959,693`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `180`ns (100%)        | `190`ns (106%)                 | `5,555,556`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `621`ns (345%)        | `691`ns (384%)                 | `1,610,306`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `10,783`ns (5,991%)   | `11,031`ns (6,128%)            | `92,739`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (160%)         | `81`ns (162%)                  | `12,500,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `80`ns (160%)         | `80`ns (160%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (160%)         | `80`ns (160%)                  | `12,500,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `140`ns (280%)        | `160`ns (320%)                 | `7,142,857`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `291`ns (582%)        | `300`ns (600%)                 | `3,436,426`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,171`ns (2,342%)    | `1,181`ns (2,362%)             | `853,971`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `71`ns (237%)         | `80`ns (267%)                  | `14,084,507`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (267%)         | `80`ns (267%)                  | `12,500,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `90`ns (300%)                  | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `271`ns (903%)        | `281`ns (937%)                 | `3,690,037`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `671`ns (2,237%)      | `681`ns (2,270%)               | `1,490,313`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,632`ns (5,440%)    | `1,643`ns (5,477%)             | `612,745`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `120`ns (100%)        | `120`ns (100%)                 | `8,333,333`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `140`ns (117%)        | `141`ns (118%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `170`ns (142%)        | `200`ns (167%)                 | `5,882,353`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `60`ns (150%)         | `60`ns (150%)                  | `16,666,667`/sec      |

<!-- endblock(results) -->
