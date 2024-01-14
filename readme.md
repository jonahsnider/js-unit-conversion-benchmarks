# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 14 Jan 2024 08:27:12 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1116-536 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `221`ns (169%)                 | `7,633,588`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `232`ns (177%)        | `532`ns (406%)                 | `4,310,345`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `240`ns (183%)        | `431`ns (329%)                 | `4,166,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `351`ns (268%)        | `693`ns (529%)                 | `2,849,003`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `582`ns (444%)        | `1,274`ns (973%)               | `1,718,213`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `691`ns (527%)        | `1,493`ns (1,140%)             | `1,447,178`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `693`ns (529%)        | `1,464`ns (1,118%)             | `1,443,001`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,463`ns (1,117%)    | `2,877`ns (2,196%)             | `683,527`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,675`ns (2,042%)    | `5,063`ns (3,865%)             | `373,832`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,799`ns (3,663%)    | `9,839`ns (7,511%)             | `208,377`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `792`ns (100%)        | `913`ns (115%)                 | `1,262,626`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,743`ns (4,008%)   | `38,783`ns (4,897%)            | `31,503`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,671`ns (5,135%)   | `41,311`ns (5,216%)            | `24,588`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `222`ns (110%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (189%)        | `422`ns (209%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (228%)        | `502`ns (249%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (302%)        | `662`ns (328%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,373`ns (680%)      | `1,464`ns (725%)               | `728,332`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,414`ns (700%)      | `1,522`ns (753%)               | `707,214`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,831`ns (2,392%)    | `5,071`ns (2,510%)             | `206,996`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (184%)        | `441`ns (219%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `422`ns (210%)        | `491`ns (244%)                 | `2,369,668`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,202`ns (598%)      | `1,383`ns (688%)               | `831,947`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,563`ns (778%)      | `1,945`ns (968%)               | `639,795`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,703`ns (2,837%)    | `6,055`ns (3,012%)             | `175,346`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,715`ns (2,843%)    | `6,883`ns (3,424%)             | `174,978`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `592`ns (100%)        | `681`ns (115%)                 | `1,689,189`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (103%)        | `691`ns (117%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (115%)        | `781`ns (132%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `351`ns (113%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (171%)        | `602`ns (194%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
