# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 19 Jun 2024 21:49:17 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az665-499 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (284%)        | `421`ns (351%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (426%)        | `611`ns (509%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (509%)        | `822`ns (685%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,122`ns (935%)      | `1,313`ns (1,094%)             | `891,266`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,452`ns (1,210%)    | `2,014`ns (1,678%)             | `688,705`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,483`ns (1,236%)    | `1,953`ns (1,627%)             | `674,309`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,817`ns (2,348%)    | `3,267`ns (2,723%)             | `354,988`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,831`ns (4,026%)    | `6,251`ns (5,209%)             | `206,996`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,703`ns (60,586%)  | `74,751`ns (62,292%)           | `13,755`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `912`ns (100%)        | `1,162`ns (127%)               | `1,096,491`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,311`ns (4,091%)   | `53,375`ns (5,853%)            | `26,802`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,399`ns (9,474%)   | `159,487`ns (17,488%)          | `11,574`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `151`ns (107%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (235%)        | `371`ns (263%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (320%)        | `511`ns (362%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (412%)        | `641`ns (455%)                 | `1,721,170`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (960%)      | `1,473`ns (1,045%)             | `739,098`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,491`ns (3,185%)    | `4,739`ns (3,361%)             | `222,668`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,343`ns (26,484%)  | `38,175`ns (27,074%)           | `26,779`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (309%)        | `431`ns (359%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (426%)        | `601`ns (501%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,292`ns (1,077%)    | `1,402`ns (1,168%)             | `773,994`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,813`ns (1,511%)    | `2,034`ns (1,695%)             | `551,572`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,623`ns (5,519%)    | `7,287`ns (6,073%)             | `150,989`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,471`ns (67,893%)  | `82,559`ns (68,799%)           | `12,274`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `501`ns (100%)        | `561`ns (112%)                 | `1,996,008`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (106%)        | `582`ns (116%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `641`ns (128%)        | `721`ns (144%)                 | `1,560,062`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `231`ns (100%)        | `260`ns (113%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (234%)        | `601`ns (260%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
