# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 01 Jul 2024 21:21:45 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1251-584 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `131`ns (109%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (334%)        | `441`ns (368%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (401%)        | `561`ns (468%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `681`ns (568%)        | `831`ns (693%)                 | `1,468,429`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,152`ns (960%)      | `1,293`ns (1,078%)             | `868,056`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,513`ns (1,261%)    | `1,874`ns (1,562%)             | `660,939`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,563`ns (1,303%)    | `1,893`ns (1,578%)             | `639,795`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,797`ns (2,331%)    | `3,127`ns (2,606%)             | `357,526`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,871`ns (4,059%)    | `5,823`ns (4,853%)             | `205,297`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,215`ns (61,013%)  | `74,431`ns (62,026%)           | `13,658`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `891`ns (100%)        | `1,172`ns (132%)               | `1,122,334`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,999`ns (3,591%)   | `41,151`ns (4,619%)            | `31,251`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,503`ns (9,596%)   | `89,535`ns (10,049%)           | `11,695`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (250%)        | `381`ns (272%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (315%)        | `491`ns (351%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (372%)        | `571`ns (408%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,292`ns (923%)      | `1,392`ns (994%)               | `773,994`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,591`ns (3,279%)    | `4,791`ns (3,422%)             | `217,817`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,791`ns (26,994%)  | `38,431`ns (27,451%)           | `26,461`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (283%)        | `381`ns (318%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (367%)        | `511`ns (426%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,393`ns (1,161%)    | `1,513`ns (1,261%)             | `717,875`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,693`ns (1,411%)    | `1,894`ns (1,578%)             | `590,667`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,935`ns (5,779%)    | `7,435`ns (6,196%)             | `144,196`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,727`ns (68,106%)  | `82,367`ns (68,639%)           | `12,236`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `550`ns (114%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (110%)        | `581`ns (121%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `592`ns (123%)        | `672`ns (140%)                 | `1,689,189`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `231`ns (105%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (250%)        | `611`ns (278%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
