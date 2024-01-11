# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 11 Jan 2024 11:39:54 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az661-721 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `211`ns (174%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `212`ns (175%)        | `382`ns (316%)                 | `4,716,981`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `252`ns (208%)        | `530`ns (438%)                 | `3,968,254`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `361`ns (298%)        | `611`ns (505%)                 | `2,770,083`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `521`ns (431%)        | `1,122`ns (927%)               | `1,919,386`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `682`ns (564%)        | `1,374`ns (1,136%)             | `1,466,276`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `712`ns (588%)        | `1,344`ns (1,111%)             | `1,404,494`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,253`ns (1,036%)    | `2,535`ns (2,095%)             | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,687`ns (2,221%)    | `4,559`ns (3,768%)             | `372,162`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,499`ns (3,718%)    | `9,279`ns (7,669%)             | `222,272`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `901`ns (100%)        | `1,022`ns (113%)               | `1,109,878`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,695`ns (3,518%)   | `38,655`ns (4,290%)            | `31,551`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,287`ns (4,471%)   | `40,927`ns (4,542%)            | `24,822`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (176%)        | `411`ns (196%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (215%)        | `500`ns (238%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `622`ns (296%)        | `672`ns (320%)                 | `1,607,717`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,333`ns (635%)      | `1,423`ns (678%)               | `750,188`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,374`ns (654%)      | `1,473`ns (701%)               | `727,802`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,879`ns (2,323%)    | `5,083`ns (2,420%)             | `204,960`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (191%)        | `451`ns (215%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (224%)        | `522`ns (249%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,344`ns (640%)      | `1,433`ns (682%)               | `744,048`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,925`ns (917%)      | `2,095`ns (998%)               | `519,481`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,063`ns (2,887%)    | `6,203`ns (2,954%)             | `164,935`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,047`ns (3,356%)    | `7,295`ns (3,474%)             | `141,904`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `651`ns (114%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `592`ns (104%)        | `672`ns (118%)                 | `1,689,189`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `661`ns (116%)        | `762`ns (133%)                 | `1,512,859`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `350`ns (113%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (168%)        | `591`ns (190%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
