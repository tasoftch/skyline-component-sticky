<?php
/**
 * Copyright (c) 2019 TASoft Applications, Th. Abplanalp <info@tasoft.ch>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

use Skyline\Compiler\CompilerContext;
use Skyline\Component\Config\CSSComponent;
use Skyline\Component\Config\JavaScriptPostLoadComponent;

$file = __DIR__ . "/Components/skyline-sticky-component.js";
$css  = __DIR__ . "/Components/skyline-sticky-component.css";

return [
	"Sticky" => [
		'js' => new JavaScriptPostLoadComponent(
			"/Public/js/skyline-sticky-component.js",
			'sha384-'.base64_encode( hash_file("sha384", $file, true)),
			NULL,
			CompilerContext::getCurrentCompiler()->getRelativeProjectPath($file)
		),
		"css" => new CSSComponent(
			"/Public/css/skyline-sticky-component.css",
			'all',
			'sha384-'. base64_encode( hash_file("sha384", $css, true)),
			NULL,
			CompilerContext::getCurrentCompiler()->getRelativeProjectPath($css)
		)
	]
];