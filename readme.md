# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 22 Oct 2026 13:25:07 GMT with Node.js v26.12.1 (V8 v14.6.202.34-node.40) on runnervmfese6 (Linux-x64 AMD EPYC 9V45 96-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `71`ns (237%)         | `90`ns (300%)                  | `14,084,507`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81`ns (270%)         | `90`ns (300%)                  | `12,345,679`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `90`ns (300%)         | `90`ns (300%)                  | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `160`ns (533%)        | `161`ns (537%)                 | `6,250,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `221`ns (737%)        | `230`ns (767%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `280`ns (933%)        | `281`ns (937%)                 | `3,571,429`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `301`ns (1,003%)      | `311`ns (1,037%)               | `3,322,259`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `610`ns (2,033%)      | `611`ns (2,037%)               | `1,639,344`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,072`ns (3,573%)    | `1,082`ns (3,607%)             | `932,836`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `200`ns (100%)        | `210`ns (105%)                 | `5,000,000`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `671`ns (336%)        | `751`ns (376%)                 | `1,490,313`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `10,519`ns (5,260%)   | `10,671`ns (5,336%)            | `95,066`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (160%)         | `90`ns (180%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `290`ns (580%)        | `291`ns (582%)                 | `3,448,276`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,212`ns (2,424%)    | `1,232`ns (2,464%)             | `825,083`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (267%)         | `90`ns (300%)                  | `12,500,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `90`ns (300%)                  | `11,111,111`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (367%)        | `120`ns (400%)                 | `9,090,909`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `291`ns (970%)        | `310`ns (1,033%)               | `3,436,426`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `661`ns (2,203%)      | `671`ns (2,237%)               | `1,512,859`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,613`ns (5,377%)    | `1,632`ns (5,440%)             | `619,963`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `150`ns (124%)        | `160`ns (132%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `181`ns (150%)        | `201`ns (166%)                 | `5,524,862`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `60`ns (150%)         | `61`ns (153%)                  | `16,666,667`/sec      |

<!-- endblock(results) -->
