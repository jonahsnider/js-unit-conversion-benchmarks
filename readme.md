# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 16 Nov 2023 10:52:07 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az984-520 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `190`ns (100%)        | `212`ns (112%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (180%)        | `401`ns (211%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (243%)        | `550`ns (289%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `592`ns (312%)        | `682`ns (359%)                 | `1,689,189`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `982`ns (517%)        | `1,132`ns (596%)               | `1,018,330`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,203`ns (633%)      | `1,433`ns (754%)               | `831,255`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,333`ns (702%)      | `1,563`ns (823%)               | `750,188`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,525`ns (1,329%)    | `2,867`ns (1,509%)             | `396,040`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,451`ns (2,343%)    | `5,099`ns (2,684%)             | `224,669`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,263`ns (4,875%)    | `9,663`ns (5,086%)             | `107,956`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `982`ns (118%)                 | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,031`ns (3,850%)   | `39,263`ns (4,719%)            | `31,220`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,735`ns (4,896%)   | `41,375`ns (4,973%)            | `24,549`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `230`ns (114%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (174%)        | `392`ns (195%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `450`ns (224%)        | `502`ns (250%)                 | `2,222,222`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (284%)        | `622`ns (309%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,232`ns (613%)      | `1,332`ns (663%)               | `811,688`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,333`ns (663%)      | `1,473`ns (733%)               | `750,188`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,591`ns (2,284%)    | `4,919`ns (2,447%)             | `217,817`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `201`ns (111%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (193%)        | `400`ns (221%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `422`ns (233%)        | `492`ns (272%)                 | `2,369,668`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,233`ns (681%)      | `1,364`ns (754%)               | `811,030`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,634`ns (903%)      | `1,915`ns (1,058%)             | `611,995`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,671`ns (3,133%)    | `5,943`ns (3,283%)             | `176,336`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,211`ns (3,431%)    | `6,855`ns (3,787%)             | `161,005`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `572`ns (100%)        | `652`ns (114%)                 | `1,748,252`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (107%)        | `682`ns (119%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (119%)        | `772`ns (135%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `281`ns (100%)        | `311`ns (111%)                 | `3,558,719`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `492`ns (175%)        | `552`ns (196%)                 | `2,032,520`/sec       |

<!-- endblock(results) -->
