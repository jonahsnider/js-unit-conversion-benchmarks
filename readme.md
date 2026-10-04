# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 04 Oct 2026 22:40:16 GMT with Node.js v26.10.0 (V8 v14.6.202.34-node.34) on runnervm8df0l (Linux-x64 AMD EPYC 9V74 80-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `101`ns (253%)        | `110`ns (275%)                 | `9,900,990`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (350%)        | `141`ns (353%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (525%)        | `220`ns (550%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `331`ns (828%)        | `341`ns (853%)                 | `3,021,148`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `451`ns (1,128%)      | `461`ns (1,153%)               | `2,217,295`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `490`ns (1,225%)      | `511`ns (1,278%)               | `2,040,816`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `992`ns (2,480%)      | `1,021`ns (2,553%)             | `1,008,065`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,612`ns (4,030%)    | `1,642`ns (4,105%)             | `620,347`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (100%)        | `350`ns (106%)                 | `3,030,303`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,052`ns (319%)      | `1,132`ns (343%)               | `950,570`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `17,871`ns (5,415%)   | `18,239`ns (5,527%)            | `55,957`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `110`ns (183%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `130`ns (217%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `220`ns (367%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `460`ns (767%)        | `461`ns (768%)                 | `2,173,913`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,793`ns (2,988%)    | `1,823`ns (3,038%)             | `557,724`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `130`ns (325%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `130`ns (325%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (375%)        | `160`ns (400%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `431`ns (1,078%)      | `441`ns (1,103%)               | `2,320,186`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,121`ns (2,803%)    | `1,131`ns (2,828%)             | `892,061`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,563`ns (6,408%)    | `2,595`ns (6,488%)             | `390,168`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `180`ns (100%)        | `190`ns (106%)                 | `5,555,556`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `210`ns (117%)        | `211`ns (117%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `251`ns (139%)        | `261`ns (145%)                 | `3,984,064`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (180%)         | `90`ns (180%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
