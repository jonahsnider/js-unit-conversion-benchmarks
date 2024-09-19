# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 19 Sep 2024 00:33:22 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az973-64 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `171`ns (342%)        | `181`ns (362%)                 | `5,847,953`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `230`ns (460%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `461`ns (922%)        | `481`ns (962%)                 | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (1,002%)      | `521`ns (1,042%)               | `1,996,008`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `601`ns (1,202%)      | `621`ns (1,242%)               | `1,663,894`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,162`ns (2,324%)    | `1,222`ns (2,444%)             | `860,585`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,215`ns (4,430%)    | `2,255`ns (4,510%)             | `451,467`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,663`ns (83,326%)  | `41,919`ns (83,838%)           | `24,002`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `701`ns (100%)        | `801`ns (114%)                 | `1,426,534`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,071`ns (4,147%)   | `31,551`ns (4,501%)            | `34,399`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,879`ns (12,964%)  | `91,583`ns (13,065%)           | `11,004`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (197%)        | `121`ns (198%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (230%)        | `150`ns (246%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (362%)        | `240`ns (393%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (805%)        | `501`ns (821%)                 | `2,036,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,185`ns (3,582%)    | `2,205`ns (3,615%)             | `457,666`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,295`ns (34,910%)  | `21,343`ns (34,989%)           | `46,959`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (282%)        | `160`ns (320%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `512`ns (1,024%)      | `532`ns (1,064%)               | `1,953,125`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (2,424%)    | `1,223`ns (2,446%)             | `825,083`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,097`ns (6,194%)    | `3,137`ns (6,274%)             | `322,893`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,695`ns (91,390%)  | `45,983`ns (91,966%)           | `21,884`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `200`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (121%)        | `231`ns (121%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `260`ns (136%)        | `261`ns (137%)                 | `3,846,154`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
