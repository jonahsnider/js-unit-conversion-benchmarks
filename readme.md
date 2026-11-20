# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 20 Nov 2026 06:17:20 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 AMD EPYC 9V74 80-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (278%)        | `120`ns (300%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (325%)        | `140`ns (350%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (450%)        | `181`ns (453%)                 | `5,555,556`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `290`ns (725%)        | `300`ns (750%)                 | `3,448,276`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `381`ns (953%)        | `391`ns (978%)                 | `2,624,672`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `421`ns (1,053%)      | `441`ns (1,103%)               | `2,375,297`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `871`ns (2,178%)      | `941`ns (2,353%)               | `1,148,106`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,412`ns (3,530%)    | `1,442`ns (3,605%)             | `708,215`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (100%)        | `341`ns (106%)                 | `3,115,265`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `891`ns (278%)        | `971`ns (302%)                 | `1,122,334`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,175`ns (4,727%)   | `15,479`ns (4,822%)            | `65,898`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (317%)        | `200`ns (333%)                 | `5,263,158`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `401`ns (668%)        | `411`ns (685%)                 | `2,493,766`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,542`ns (2,570%)    | `1,593`ns (2,655%)             | `648,508`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `121`ns (303%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `121`ns (303%)        | `140`ns (350%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `410`ns (1,025%)      | `501`ns (1,253%)               | `2,439,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `962`ns (2,405%)      | `972`ns (2,430%)               | `1,039,501`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,183`ns (5,458%)    | `2,235`ns (5,588%)             | `458,085`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `171`ns (100%)        | `181`ns (106%)                 | `5,847,953`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `191`ns (112%)        | `200`ns (117%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `250`ns (146%)        | `260`ns (152%)                 | `4,000,000`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (225%)         | `140`ns (350%)                 | `11,111,111`/sec      |

<!-- endblock(results) -->
