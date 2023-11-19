# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 19 Nov 2023 00:30:24 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1501-928 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `102`ns (100%)        | `201`ns (197%)                 | `9,803,922`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `211`ns (207%)        | `391`ns (383%)                 | `4,739,336`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `270`ns (265%)        | `492`ns (482%)                 | `3,703,704`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `331`ns (325%)        | `692`ns (678%)                 | `3,021,148`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `502`ns (492%)        | `1,062`ns (1,041%)             | `1,992,032`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `703`ns (689%)        | `1,494`ns (1,465%)             | `1,422,475`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `733`ns (719%)        | `1,444`ns (1,416%)             | `1,364,256`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,302`ns (1,276%)    | `2,805`ns (2,750%)             | `768,049`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,635`ns (2,583%)    | `5,043`ns (4,944%)             | `379,507`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,659`ns (4,568%)    | `9,711`ns (9,521%)             | `214,638`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `791`ns (100%)        | `911`ns (115%)                 | `1,264,223`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,663`ns (4,003%)   | `38,463`ns (4,863%)            | `31,583`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,775`ns (5,028%)   | `40,511`ns (5,121%)            | `25,141`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `211`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (173%)        | `380`ns (199%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `482`ns (252%)        | `531`ns (278%)                 | `2,074,689`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (299%)        | `621`ns (325%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,213`ns (635%)      | `1,314`ns (688%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (682%)      | `1,444`ns (756%)               | `768,049`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,599`ns (2,408%)    | `4,939`ns (2,586%)             | `217,439`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `222`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (200%)        | `451`ns (224%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `482`ns (240%)        | `542`ns (270%)                 | `2,074,689`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,372`ns (683%)      | `1,493`ns (743%)               | `728,863`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,863`ns (927%)      | `2,095`ns (1,042%)             | `536,769`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,971`ns (2,971%)    | `6,175`ns (3,072%)             | `167,476`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,803`ns (3,385%)    | `7,247`ns (3,605%)             | `146,994`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `562`ns (100%)        | `632`ns (112%)                 | `1,779,359`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `603`ns (107%)        | `662`ns (118%)                 | `1,658,375`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `673`ns (120%)        | `752`ns (134%)                 | `1,485,884`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `330`ns (110%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (174%)        | `572`ns (191%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
