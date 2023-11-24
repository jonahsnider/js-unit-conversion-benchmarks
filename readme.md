# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 24 Nov 2023 18:19:57 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1040-916 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `200`ns (180%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `191`ns (172%)        | `342`ns (308%)                 | `5,235,602`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `252`ns (227%)        | `512`ns (461%)                 | `3,968,254`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `311`ns (280%)        | `652`ns (587%)                 | `3,215,434`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `471`ns (424%)        | `1,052`ns (948%)               | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `682`ns (614%)        | `1,423`ns (1,282%)             | `1,466,276`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `682`ns (614%)        | `1,404`ns (1,265%)             | `1,466,276`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,253`ns (1,129%)    | `2,725`ns (2,455%)             | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,537`ns (2,286%)    | `4,751`ns (4,280%)             | `394,166`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,491`ns (4,046%)    | `9,775`ns (8,806%)             | `222,668`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `812`ns (100%)        | `912`ns (112%)                 | `1,231,527`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,679`ns (3,901%)   | `38,623`ns (4,757%)            | `31,567`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,487`ns (4,863%)   | `40,159`ns (4,946%)            | `25,325`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `221`ns (111%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (181%)        | `402`ns (201%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `531`ns (266%)        | `582`ns (291%)                 | `1,883,239`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (291%)        | `642`ns (321%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,272`ns (636%)      | `1,384`ns (692%)               | `786,164`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,303`ns (652%)      | `1,442`ns (721%)               | `767,460`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,771`ns (2,386%)    | `5,083`ns (2,542%)             | `209,600`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `221`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (205%)        | `451`ns (236%)                 | `2,557,545`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (246%)        | `522`ns (273%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,313`ns (687%)      | `1,463`ns (766%)               | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,794`ns (939%)      | `2,075`ns (1,086%)             | `557,414`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,891`ns (3,084%)    | `6,115`ns (3,202%)             | `169,750`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,503`ns (3,405%)    | `7,047`ns (3,690%)             | `153,775`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `552`ns (100%)        | `632`ns (114%)                 | `1,811,594`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `601`ns (109%)        | `662`ns (120%)                 | `1,663,894`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (122%)        | `762`ns (138%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `282`ns (100%)        | `311`ns (110%)                 | `3,546,099`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `490`ns (174%)        | `551`ns (195%)                 | `2,040,816`/sec       |

<!-- endblock(results) -->
