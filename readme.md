# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 14 Nov 2023 22:07:04 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1269-522 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (199%)        | `432`ns (226%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `542`ns (284%)        | `603`ns (316%)                 | `1,845,018`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (320%)        | `693`ns (363%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,033`ns (541%)      | `1,142`ns (598%)               | `968,054`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,393`ns (729%)      | `1,593`ns (834%)               | `717,875`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,434`ns (751%)      | `1,603`ns (839%)               | `697,350`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,747`ns (1,438%)    | `2,977`ns (1,559%)             | `364,033`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,691`ns (2,456%)    | `5,123`ns (2,682%)             | `213,174`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,543`ns (4,996%)    | `9,871`ns (5,168%)             | `104,789`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `762`ns (100%)        | `862`ns (113%)                 | `1,312,336`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,647`ns (4,153%)   | `39,007`ns (5,119%)            | `31,599`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,679`ns (5,207%)   | `40,415`ns (5,304%)            | `25,202`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (170%)        | `391`ns (195%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `442`ns (220%)        | `492`ns (245%)                 | `2,262,443`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (294%)        | `642`ns (319%)                 | `1,692,047`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,222`ns (608%)      | `1,313`ns (653%)               | `818,331`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,283`ns (638%)      | `1,414`ns (703%)               | `779,423`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (2,304%)    | `4,911`ns (2,443%)             | `215,936`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `182`ns (100%)        | `210`ns (115%)                 | `5,494,505`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (188%)        | `401`ns (220%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (248%)        | `531`ns (292%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,272`ns (699%)      | `1,463`ns (804%)               | `786,164`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,634`ns (898%)      | `2,014`ns (1,107%)             | `611,995`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,723`ns (3,145%)    | `6,095`ns (3,349%)             | `174,734`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,015`ns (3,305%)    | `7,003`ns (3,848%)             | `166,251`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `583`ns (100%)        | `652`ns (112%)                 | `1,715,266`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `613`ns (105%)        | `672`ns (115%)                 | `1,631,321`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `703`ns (121%)        | `782`ns (134%)                 | `1,422,475`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `290`ns (100%)        | `312`ns (108%)                 | `3,448,276`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (180%)        | `572`ns (197%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
