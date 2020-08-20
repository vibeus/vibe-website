module github/vibeus/vibe-website

go 1.13

require (
	github.com/vibeus/hugo-common/v2 v2.0.2-0.20200817184454-58737525d57f // indirect
	github.com/vibeus/vibe-cms/v2 v2.0.1-0.20200728175847-2596cfb8de17 // indirect
)

replace github.com/vibeus/vibe-cms/v2 => ../vibe-cms

replace github.com/vibeus/hugo-common/v2 => ../hugo-common
