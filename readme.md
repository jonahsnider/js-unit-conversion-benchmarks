# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 18 Jun 2024 15:29:16 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1433-185 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (239%)        | `381`ns (293%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (393%)        | `581`ns (447%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `621`ns (478%)        | `742`ns (571%)                 | `1,610,306`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,091`ns (839%)      | `1,222`ns (940%)               | `916,590`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,463`ns (1,125%)    | `1,923`ns (1,479%)             | `683,527`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,573`ns (1,210%)    | `1,953`ns (1,502%)             | `635,728`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,807`ns (2,159%)    | `3,207`ns (2,467%)             | `356,252`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,879`ns (3,753%)    | `6,083`ns (4,679%)             | `204,960`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,407`ns (56,467%)  | `75,455`ns (58,042%)           | `13,623`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `892`ns (100%)        | `1,162`ns (130%)               | `1,121,076`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `33,503`ns (3,756%)   | `45,055`ns (5,051%)            | `29,848`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,695`ns (9,607%)   | `101,247`ns (11,351%)          | `11,669`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (215%)        | `331`ns (236%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `391`ns (279%)        | `431`ns (308%)                 | `2,557,545`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (379%)        | `581`ns (415%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (909%)      | `1,382`ns (987%)               | `786,164`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,419`ns (3,156%)    | `4,619`ns (3,299%)             | `226,296`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,831`ns (26,308%)  | `37,567`ns (26,834%)           | `27,151`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `151`ns (116%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (269%)        | `390`ns (300%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (339%)        | `501`ns (385%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,293`ns (995%)      | `1,413`ns (1,087%)             | `773,395`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,603`ns (1,233%)    | `1,753`ns (1,348%)             | `623,830`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,435`ns (4,950%)    | `6,875`ns (5,288%)             | `155,400`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,895`ns (62,227%)  | `81,727`ns (62,867%)           | `12,362`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `572`ns (116%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `631`ns (129%)        | `701`ns (143%)                 | `1,584,786`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `251`ns (114%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (245%)        | `602`ns (272%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
