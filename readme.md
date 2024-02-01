# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 01 Feb 2024 23:05:16 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az738-902 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `200`ns (180%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (181%)        | `372`ns (335%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `251`ns (226%)        | `471`ns (424%)                 | `3,984,064`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `341`ns (307%)        | `633`ns (570%)                 | `2,932,551`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `522`ns (470%)        | `1,053`ns (949%)               | `1,915,709`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `692`ns (623%)        | `1,323`ns (1,192%)             | `1,445,087`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `702`ns (632%)        | `1,373`ns (1,237%)             | `1,424,501`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,253`ns (1,129%)    | `2,555`ns (2,302%)             | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,717`ns (2,448%)    | `4,639`ns (4,179%)             | `368,053`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,471`ns (4,028%)    | `9,103`ns (8,201%)             | `223,664`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `751`ns (100%)        | `863`ns (115%)                 | `1,331,558`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,111`ns (4,276%)   | `39,167`ns (5,215%)            | `31,142`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,447`ns (5,386%)   | `41,119`ns (5,475%)            | `24,724`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (177%)        | `421`ns (200%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (239%)        | `551`ns (262%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (277%)        | `641`ns (305%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,314`ns (626%)      | `1,413`ns (673%)               | `761,035`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,412`ns (672%)      | `1,522`ns (725%)               | `708,215`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,831`ns (2,300%)    | `5,059`ns (2,409%)             | `206,996`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `241`ns (115%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (186%)        | `441`ns (210%)                 | `2,557,545`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (243%)        | `572`ns (272%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,334`ns (635%)      | `1,464`ns (697%)               | `749,625`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,843`ns (878%)      | `2,055`ns (979%)               | `542,594`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,043`ns (2,878%)    | `6,195`ns (2,950%)             | `165,481`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,847`ns (3,260%)    | `7,187`ns (3,422%)             | `146,049`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `572`ns (100%)        | `651`ns (114%)                 | `1,748,252`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (107%)        | `673`ns (118%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `671`ns (117%)        | `752`ns (131%)                 | `1,490,313`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `292`ns (100%)        | `321`ns (110%)                 | `3,424,658`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (179%)        | `582`ns (199%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
