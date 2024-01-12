# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 12 Jan 2024 23:32:24 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az847-536 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `230`ns (114%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (179%)        | `412`ns (204%)                 | `2,762,431`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `462`ns (229%)        | `531`ns (263%)                 | `2,164,502`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `632`ns (313%)        | `691`ns (342%)                 | `1,582,278`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,122`ns (555%)      | `1,223`ns (605%)               | `891,266`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,343`ns (665%)      | `1,504`ns (745%)               | `744,602`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,383`ns (685%)      | `1,524`ns (754%)               | `723,066`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,815`ns (1,394%)    | `3,007`ns (1,489%)             | `355,240`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,843`ns (2,398%)    | `5,151`ns (2,550%)             | `206,484`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,663`ns (4,784%)    | `9,871`ns (4,887%)             | `103,488`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `802`ns (100%)        | `912`ns (114%)                 | `1,246,883`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,095`ns (4,002%)   | `39,071`ns (4,872%)            | `31,158`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,263`ns (4,896%)   | `39,871`ns (4,971%)            | `25,469`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (179%)        | `392`ns (205%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (247%)        | `542`ns (284%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (283%)        | `602`ns (315%)                 | `1,848,429`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,262`ns (661%)      | `1,394`ns (730%)               | `792,393`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,314`ns (688%)      | `1,512`ns (792%)               | `761,035`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,599`ns (2,408%)    | `5,091`ns (2,665%)             | `217,439`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (182%)        | `422`ns (201%)                 | `2,617,801`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (220%)        | `502`ns (239%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,382`ns (658%)      | `1,452`ns (691%)               | `723,589`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,853`ns (882%)      | `1,994`ns (950%)               | `539,665`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,995`ns (2,855%)    | `6,135`ns (2,921%)             | `166,806`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,847`ns (3,260%)    | `7,063`ns (3,363%)             | `146,049`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `652`ns (112%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (105%)        | `671`ns (115%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (115%)        | `753`ns (129%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `312`ns (100%)        | `350`ns (112%)                 | `3,205,128`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (173%)        | `592`ns (190%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
