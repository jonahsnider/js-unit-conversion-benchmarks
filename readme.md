# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 18 Mar 2024 21:54:02 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az659-658 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `131`ns (118%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (316%)        | `431`ns (388%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (415%)        | `531`ns (478%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `621`ns (559%)        | `822`ns (741%)                 | `1,610,306`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,093`ns (985%)      | `1,332`ns (1,200%)             | `914,913`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,373`ns (1,237%)    | `1,984`ns (1,787%)             | `728,332`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,393`ns (1,255%)    | `1,974`ns (1,778%)             | `717,875`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,605`ns (2,347%)    | `3,127`ns (2,817%)             | `383,877`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,579`ns (4,125%)    | `5,971`ns (5,379%)             | `218,388`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,039`ns (63,999%)  | `73,151`ns (65,902%)           | `14,077`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `821`ns (100%)        | `1,163`ns (142%)               | `1,218,027`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,679`ns (4,346%)   | `52,671`ns (6,415%)            | `28,028`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,583`ns (10,181%)  | `155,647`ns (18,958%)          | `11,964`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `150`ns (115%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (237%)        | `351`ns (268%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `430`ns (328%)        | `481`ns (367%)                 | `2,325,581`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (428%)        | `601`ns (459%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (956%)      | `1,342`ns (1,024%)             | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,431`ns (3,382%)    | `4,619`ns (3,526%)             | `225,683`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,607`ns (27,944%)  | `37,183`ns (28,384%)           | `27,317`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (251%)        | `340`ns (283%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (393%)        | `531`ns (443%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,322`ns (1,102%)    | `1,453`ns (1,211%)             | `756,430`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,693`ns (1,411%)    | `1,923`ns (1,602%)             | `590,667`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,475`ns (5,396%)    | `7,063`ns (5,886%)             | `154,440`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,871`ns (66,559%)  | `80,895`ns (67,413%)           | `12,520`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `541`ns (115%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (111%)        | `571`ns (121%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `612`ns (130%)        | `691`ns (147%)                 | `1,633,987`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (232%)        | `571`ns (260%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
