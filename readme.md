# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 17 Jul 2024 02:19:58 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1776-234 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (254%)        | `361`ns (278%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (308%)        | `451`ns (347%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (455%)        | `631`ns (485%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (871%)      | `1,183`ns (910%)               | `883,392`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,323`ns (1,018%)    | `1,403`ns (1,079%)             | `755,858`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,352`ns (1,040%)    | `1,453`ns (1,118%)             | `739,645`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,785`ns (2,142%)    | `2,905`ns (2,235%)             | `359,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (3,562%)    | `4,811`ns (3,701%)             | `215,936`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,703`ns (55,925%)  | `73,471`ns (56,516%)           | `13,755`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `712`ns (100%)        | `951`ns (134%)                 | `1,404,494`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,391`ns (4,409%)   | `40,607`ns (5,703%)            | `31,856`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,567`ns (12,018%)  | `91,391`ns (12,836%)           | `11,687`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `141`ns (100%)        | `161`ns (114%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (213%)        | `371`ns (263%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (313%)        | `561`ns (398%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (370%)        | `631`ns (448%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (917%)      | `1,723`ns (1,222%)             | `773,395`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,271`ns (3,029%)    | `5,303`ns (3,761%)             | `234,137`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,055`ns (26,280%)  | `38,399`ns (27,233%)           | `26,987`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (284%)        | `381`ns (318%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (392%)        | `531`ns (443%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,352`ns (1,127%)    | `1,433`ns (1,194%)             | `739,645`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,634`ns (1,362%)    | `1,803`ns (1,503%)             | `611,995`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,763`ns (5,636%)    | `7,135`ns (5,946%)             | `147,863`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,575`ns (67,146%)  | `81,215`ns (67,679%)           | `12,411`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `480`ns (100%)        | `541`ns (113%)                 | `2,083,333`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (106%)        | `561`ns (117%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `591`ns (123%)        | `662`ns (138%)                 | `1,692,047`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `251`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (240%)        | `611`ns (266%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
