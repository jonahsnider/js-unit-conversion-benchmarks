# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 01 Feb 2024 14:30:44 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1196-966 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `221`ns (183%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (166%)        | `392`ns (324%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `232`ns (192%)        | `512`ns (423%)                 | `4,310,345`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `311`ns (257%)        | `661`ns (546%)                 | `3,215,434`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `491`ns (406%)        | `1,192`ns (985%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `653`ns (540%)        | `1,514`ns (1,251%)             | `1,531,394`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `681`ns (563%)        | `1,443`ns (1,193%)             | `1,468,429`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,213`ns (1,002%)    | `2,835`ns (2,343%)             | `824,402`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,657`ns (2,196%)    | `5,083`ns (4,201%)             | `376,364`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,471`ns (3,695%)    | `9,799`ns (8,098%)             | `223,664`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `781`ns (100%)        | `902`ns (115%)                 | `1,280,410`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,015`ns (4,099%)   | `39,007`ns (4,994%)            | `31,235`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,191`ns (5,146%)   | `40,831`ns (5,228%)            | `24,881`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `220`ns (110%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (186%)        | `412`ns (206%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `502`ns (251%)        | `551`ns (276%)                 | `1,992,032`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (291%)        | `641`ns (321%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,303`ns (652%)      | `1,403`ns (702%)               | `767,460`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,392`ns (696%)      | `1,494`ns (747%)               | `718,391`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,751`ns (2,376%)    | `4,999`ns (2,500%)             | `210,482`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `211`ns (100%)        | `231`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (190%)        | `470`ns (223%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (233%)        | `562`ns (266%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,413`ns (670%)      | `1,574`ns (746%)               | `707,714`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,875`ns (889%)      | `2,205`ns (1,045%)             | `533,333`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,983`ns (2,836%)    | `6,255`ns (2,964%)             | `167,140`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,583`ns (3,120%)    | `7,435`ns (3,524%)             | `151,906`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `641`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `601`ns (105%)        | `672`ns (118%)                 | `1,663,894`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `662`ns (116%)        | `751`ns (132%)                 | `1,510,574`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `351`ns (113%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (171%)        | `592`ns (190%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
