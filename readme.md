# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 25 Sep 2024 22:15:52 GMT with Node.js v20.17.0 (V8 v11.3.244.8-node.23) on fv-az802-797 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `190`ns (380%)        | `200`ns (400%)                 | `5,263,158`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (442%)        | `241`ns (482%)                 | `4,524,887`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `480`ns (960%)        | `501`ns (1,002%)               | `2,083,333`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `521`ns (1,042%)      | `531`ns (1,062%)               | `1,919,386`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `621`ns (1,242%)      | `641`ns (1,282%)               | `1,610,306`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,102`ns (2,204%)    | `1,142`ns (2,284%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,135`ns (4,270%)    | `2,165`ns (4,330%)             | `468,384`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `41,471`ns (82,942%)  | `41,695`ns (83,390%)           | `24,113`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `801`ns (100%)        | `892`ns (111%)                 | `1,248,439`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,895`ns (3,607%)   | `30,863`ns (3,853%)            | `34,608`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90,815`ns (11,338%)  | `91,455`ns (11,418%)           | `11,011`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `151`ns (252%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (267%)        | `161`ns (268%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `221`ns (368%)        | `231`ns (385%)                 | `4,524,887`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (835%)        | `511`ns (852%)                 | `1,996,008`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,185`ns (3,642%)    | `2,215`ns (3,692%)             | `457,666`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `21,327`ns (35,545%)  | `21,407`ns (35,678%)           | `46,889`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `551`ns (1,102%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,222`ns (2,444%)    | `1,242`ns (2,484%)             | `818,331`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,095`ns (6,190%)    | `3,137`ns (6,274%)             | `323,102`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `45,663`ns (91,326%)  | `45,951`ns (91,902%)           | `21,900`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `220`ns (105%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (110%)        | `231`ns (110%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (133%)        | `281`ns (134%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
