# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 23 Feb 2024 00:35:20 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1542-913 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (247%)        | `351`ns (270%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (316%)        | `461`ns (355%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (455%)        | `641`ns (493%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,072`ns (825%)      | `1,133`ns (872%)               | `932,836`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (978%)      | `1,373`ns (1,056%)             | `786,164`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,373`ns (1,056%)    | `1,473`ns (1,133%)             | `728,332`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,635`ns (2,027%)    | `2,765`ns (2,127%)             | `379,507`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,379`ns (3,368%)    | `4,619`ns (3,553%)             | `228,363`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,551`ns (55,039%)  | `72,319`ns (55,630%)           | `13,976`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `822`ns (100%)        | `1,112`ns (135%)               | `1,216,545`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,119`ns (3,786%)   | `42,655`ns (5,189%)            | `32,135`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,327`ns (10,137%)  | `93,119`ns (11,328%)           | `12,001`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (207%)        | `341`ns (244%)                 | `3,448,276`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (329%)        | `531`ns (379%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (401%)        | `631`ns (451%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,273`ns (909%)      | `1,432`ns (1,023%)             | `785,546`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,519`ns (3,228%)    | `4,919`ns (3,514%)             | `221,288`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,671`ns (26,194%)  | `37,375`ns (26,696%)           | `27,270`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (275%)        | `381`ns (318%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (376%)        | `531`ns (443%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,413`ns (1,178%)    | `1,613`ns (1,344%)             | `707,714`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,673`ns (1,394%)    | `2,125`ns (1,771%)             | `597,729`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,763`ns (5,636%)    | `7,747`ns (6,456%)             | `147,863`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,295`ns (66,079%)  | `80,319`ns (66,933%)           | `12,611`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `581`ns (121%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `592`ns (123%)        | `671`ns (140%)                 | `1,689,189`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `231`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (247%)        | `581`ns (275%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
